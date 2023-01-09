import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const axios = require('axios');

const ProductEditForm = () => {

    const { id } = useParams();

    // states
    const [productData, setProductData] = useState({})
    
    const [additionalOne, setAdditionalOne] = useState();
    const [additionalTwo, setAdditionalTwo] = useState();
    const [additionalThree, setAdditionalThree] = useState();
    const [sizeOne, setSizeOne] = useState();
    const [sizeTwo, setSizeTwo] = useState();
    const [sizeThree, setSizeThree] = useState();
    const [featureOne, setFeatureOne] = useState();
    const [featureTwo, setFeatureTwo] = useState();
    const [featureThree, setFeatureThree] = useState();
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [metaDescription, setMetaDescription] = useState([])
    const [metaTitle, setMetaTitle] = useState([])
    const [sku, setSku] = useState([])
    const [brand, setBrand] = useState("")
    const [stock, setStock] = useState("")
    const [tags, setTags] = useState("")
    const [featuredImage, setFeaturedImage] = useState({})
    const [galleryImages, setGalleryImages] = useState([])
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("");

    const handleAddProduct = (e) => {
        e.preventDefault();

        const UpdatedProductData = {
            product_name: name,
            product_desc: desc,
            additionalInfo: [
                additionalOne,
                additionalTwo,
                additionalThree,
            ],
            sku: sku,
            features: [
                featureOne,
                featureTwo,
                featureThree
            ],
            brand: brand,
            stock: stock,
            metaTags: tags,
            metaDescription: metaDescription,
            metaTitle: metaTitle,
            category: category,
            price: price
        }

        // const product = new FormData();

        // product.append('product_name', name)
        // product.append('product_desc', desc)
        // product.append('additionalInfo', [
        //     additionalOne.current.value,
        //     additionalTwo.current.value,
        //     additionalThree.current.value,
        // ])
        // product.append('sizes', [
        //     sizeOne.current.checked,
        //     sizeTwo.current.checked,
        //     sizeThree.current.checked
        // ])
        // product.append('sku', sku)
        // product.append('features', [
        //     featureOne.current.value,
        //     featureTwo.current.value,
        //     featureThree.current.value
        // ])
        // product.append('brand', brand)
        // product.append('stock', stock)
        // product.append('metaTags', tags)
        // product.append('metaDescription', metaDescription)
        // product.append('metaTitle', metaTitle)
        // product.append('category', category)
        // product.append('price', price)
        // product.append('featuredImage', featuredImage)
        // for (let i = 0; i <= galleryImages.length; i++) {
        //     product.append('gallaryImages', galleryImages[i])
        // }
        axios.put(`https://fast-commerce-backend.onrender.com/product/${id}`, UpdatedProductData)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        loadProductData()
    }, [])

    const handleFeaturesList = (features) => {
        const makeArrayOfFeatures = features.split(",");
        setFeatureOne(makeArrayOfFeatures[0]);
        setFeatureTwo(makeArrayOfFeatures[1]);
        setFeatureThree(makeArrayOfFeatures[2]);
    }

    const handleAdditionalInfo = (info) => {
        const makeArrayOfInfo = info.split(".,");
        setAdditionalOne(makeArrayOfInfo[0]);
        setAdditionalTwo(makeArrayOfInfo[1]);
        setAdditionalThree(makeArrayOfInfo[2]);
    }
    // console.log("checking ref", additionalOne.current.value)
    const loadProductData = () => {
        fetch(`https://fast-commerce-backend.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductData(data)
                setName(data.name)
                setDesc(data.desc)
                setBrand(data.brand)
                setCategory(data.category)
                setMetaDescription(data.metaDescription)
                setMetaTitle(data.metaTitle)
                setTags(data.metaTags)
                setPrice(data.price)
                setSku(data.sku)
                setStock(data.stock)
                handleFeaturesList(data.features)
                handleAdditionalInfo(data.additionalInfo)
            })
    }

    return (
        <div>
            <form className='p-1' encType='multipart/form-data' onSubmit={handleAddProduct}>
                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">product name</h2>
                    <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} defaultValue={productData.name} placeholder='product name' />
                </div>
                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">product description</h2>
                    <textarea className="form-control" placeholder='description' onChange={(e) => setDesc(e.target.value)} cols="30" rows="10" defaultValue={productData.desc}></textarea>
                </div>
                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">additional info: </h2>
                    <input className="form-control" type="text" onChange={(e) => setAdditionalOne(e.target.value)} placeholder='additional info' defaultValue={additionalOne} />
                    <br />
                    <input className="form-control" type="text" onChange={(e) => setAdditionalTwo(e.target.value)} placeholder='additional info' defaultValue={additionalTwo} />
                    <br />
                    <input className="form-control" type="text" onChange={(e) => setAdditionalThree(e.target.value)} placeholder='additional info' defaultValue={additionalThree} />
                </div>
                {/* <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Sizes</h2>
                    <input className="" type="checkbox" onChange={(e) => setSizeOne(e.target.value)} id="small" value="small" />
                    <label htmlFor="small"> Small</label>
                    <br />
                    <input className="" type="checkbox" onChange={(e) => setSizeTwo(e.target.value)} id="medium" value="medium" />
                    <label htmlFor="medium"> medium</label>
                    <br />
                    <input className="" type="checkbox" onChange={(e) => setSizeThree(e.target.value)} id="large" value="large" />
                    <label htmlFor="large"> large</label>
                </div> */}

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">SKU</h2>
                    <input className="form-control" type="text" placeholder='sku number' onChange={(e) => setSku(e.target.value)} defaultValue={productData.sku} />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Features</h2>
                    <input className="form-control" type="text" placeholder='Feature1' onChange={(e)=> setFeatureOne(e.target.value)} defaultValue={featureOne} />
                    <br />
                    <input className="form-control" type="text" placeholder='Feature2' onChange={(e)=> setFeatureTwo(e.target.value)} defaultValue={featureTwo} />
                    <br />
                    <input className="form-control" type="text" placeholder='Feature3' onChange={(e)=> setFeatureThree(e.target.value)} defaultValue={featureThree} />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Brand</h2>
                    <input className="form-control" type="text" placeholder='Brand' onChange={(e) => setBrand(e.target.value)} defaultValue={productData.brand} />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">stock</h2>
                    <input className="form-control" type="number" placeholder='stock' onChange={(e) => setStock(e.target.value)} defaultValue={productData.stock} />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Meta Title</h2>
                    <input className="form-control" type="text" placeholder='meta title' onChange={(e) => setMetaTitle(e.target.value)} defaultValue={productData.metaTitle} />
                    <br />
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Meta Description</h2>
                    <textarea className="form-control" type="text" placeholder='meta description' rows="10" cols="50" onChange={(e) => setMetaDescription(e.target.value)} defaultValue={productData.metaDescription} />
                    <br />
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Meta Tags</h2>
                    <input className="form-control" type="text" onChange={(e) => setTags(e.target.value)} placeholder='add tags and separate with comma' defaultValue={productData.metaTags} />
                </div>

                {/* <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">featured Image</h2>
                    <input className="form-control" type="file" name="featuredImage" onChange={(e) => setFeaturedImage(e.target.files[0])} accept="image/*" placeholder='featured image' />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Gallery image</h2>
                    <input className="form-control" type="file" name="galleryImages" onChange={(e) => setGalleryImages(e.target.files)} accept="image/*" placeholder='featured image' multiple />
                </div> */}

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Category</h2>
                    <input className="form-control" type="text" placeholder='category' onChange={(e) => setCategory(e.target.value)} defaultValue={productData.category} />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Price</h2>
                    <input className="form-control" type="number" placeholder='price' onChange={(e) => setPrice(e.target.value)} defaultValue={productData.price} />
                </div>

                <div className="py-4">
                    <Button className='brandOne-btn fs-5 border-0' type='submit'>submit</Button>
                </div>
            </form>
        </div>
    );
};

export default ProductEditForm;
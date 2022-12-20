import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const axios = require('axios');

const ProductEditForm = () => {

    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const [additionalInfoList, setAdditionalInfoList] = useState([])
    const [featuresList, setFeaturesList] = useState([])


    // refs
    const additionalOne = useRef();
    const additionalTwo = useRef();
    const additionalThree = useRef();
    const sizeOne = useRef();
    const sizeTwo = useRef();
    const sizeThree = useRef();
    const featureOne = useRef();
    const featureTwo = useRef();
    const featureThree = useRef();

    // states
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

        const product = new FormData();

        product.append('product_name', name)
        product.append('product_desc', desc)
        product.append('additionalInfo', [
            additionalOne.current.value,
            additionalTwo.current.value,
            additionalThree.current.value,
        ])
        product.append('sizes', [
            sizeOne.current.checked,
            sizeTwo.current.checked,
            sizeThree.current.checked
        ])
        product.append('sku', sku)
        product.append('features', [
            featureOne.current.value,
            featureTwo.current.value,
            featureThree.current.value
        ])
        product.append('brand', brand)
        product.append('stock', stock)
        product.append('metaTags', tags)
        product.append('metaDescription', metaDescription)
        product.append('metaTitle', metaTitle)
        product.append('category', category)
        product.append('price', price)
        // product.append('featuredImage', featuredImage)
        // for (let i = 0; i <= galleryImages.length; i++) {
        //     product.append('gallaryImages', galleryImages[i])
        // }

        axios.put("http://localhost:5000/addproduct", product)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))

    }

    useEffect(() => {
        loadProductData()
    }, [])

    const createFeaturesList = (features) => {
        const makeArrayOfFeatures = features.split(",");
        setFeaturesList(makeArrayOfFeatures);
    }

    const creaAdditionalInfoList = (info) => {
        const makeArrayOfInfo = info.split(".,");
        setAdditionalInfoList(makeArrayOfInfo);
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
                createFeaturesList(data.features)
                creaAdditionalInfoList(data.additionalInfo)
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
                    <input className="form-control" type="text" ref={additionalOne} placeholder='additional info' defaultValue={additionalInfoList[0]}/>
                    <br />
                    <input className="form-control" type="text" ref={additionalTwo} placeholder='additional info' defaultValue={additionalInfoList[1]} />
                    <br />
                    <input className="form-control" type="text" ref={additionalThree} placeholder='additional info' defaultValue={additionalInfoList[2]} />
                </div>
                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Sizes</h2>
                    <input className="" type="checkbox" ref={sizeOne} id="small" value="small" />
                    <label htmlFor="small"> Small</label>
                    <br />
                    <input className="" type="checkbox" ref={sizeTwo} id="medium" value="medium" />
                    <label htmlFor="medium"> medium</label>
                    <br />
                    <input className="" type="checkbox" ref={sizeThree} id="large" value="large" />
                    <label htmlFor="large"> large</label>
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">SKU</h2>
                    <input className="form-control" type="text" placeholder='sku number' onChange={(e) => setSku(e.target.value)} defaultValue={productData.sku} />
                </div>

                <div className="py-4">
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Features</h2>
                    <input className="form-control" type="text" placeholder='Feature1' ref={featureOne} defaultValue={featuresList[0]} />
                    <br />
                    <input className="form-control" type="text" placeholder='Feature2' ref={featureTwo} defaultValue={featuresList[1]} />
                    <br />
                    <input className="form-control" type="text" placeholder='Feature3' ref={featureThree} defaultValue={featuresList[2]} />
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
                    <h2 className="overflow-hidden brandTwo-text fs-3 fw-semibold text-capitalize pb-2">Meta info</h2>
                    <input className="form-control" type="text" placeholder='meta title' onChange={(e) => setMetaTitle(e.target.value)} defaultValue={productData.metaTitle} />
                    <br />
                    <textarea className="form-control" type="text" placeholder='meta description' rows="10" cols="50" onChange={(e) => setMetaDescription(e.target.value)} defaultValue={productData.metaDescription} />
                    <br />
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
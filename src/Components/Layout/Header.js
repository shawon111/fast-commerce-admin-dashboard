import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../Static/Images/fast-logo.png';
import { BiMenu } from 'react-icons/bi';
import ProfileImg from '../../Static/Images/profile.png';

const Header = () => {
    return (
        <div className='px-3 py-4'>
            <Row className='align-items-center'>

                {/* logo and menu toogle icon */}
                <Col xs={12} md={4} xl={2}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <img className='w-75 h-75 cursor-pointer' src={Logo} alt="logo" />
                        </div>
                        <div>
                            <BiMenu className='fs-4 brandTwo-text border border-3 brandTwo-border cursor-pointer me-1' />
                        </div>
                    </div>
                </Col>

                {/* search and profile icon */}
                <Col className="d-none d-md-block" xs={0} md={8} xl={10}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='ms-5'>
                            <div class="input-group">
                                <input type="text" class="form-control brandTwo-border" aria-describedby="button-addon2" />
                                <button class="btn brandTwo-border brandTwo-bg text-light brandTwo-text-hover" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                        <div style={{
                            width: 'fit-content'
                        }}>
                            <img className='w-25 cursor-pointer d-block ms-auto' src={ProfileImg} alt="logo" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
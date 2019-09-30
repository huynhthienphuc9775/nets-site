import React, { Component } from "react";
import { Grid, Button, Icon } from "@material-ui/core";

class Footer1 extends Component {
  state = {};
  render() {
    return (
      <div className="section-footer1 light-dark" id="footer1">
        <div className="container">
          <Grid container>
            <Grid item lg={6} md={6} sm={12}>
              <div className="footer1__about">
                <h4>Về NetS</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis perferendis rem, aut aliquam neque nam? dolor sit
                  amet, consectetur adipisicing elit consectetur adipisicing
                  elit. Officiis perferendis rem, aut aliquam.
                </p>
                <Button variant="contained" color="secondary">
                  Liên hệ
                </Button>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <div className="footer1__contact">
                <h4>Thông tin liên hệ</h4>
                <div className="px-16 my-32">
                  <Icon className="footer1__contact__icon">mail</Icon>
                  <div className="pl-16">
                    <h5 className="m-0 p-0">Email</h5>
                    <p className="m-0 p-0">email@abc.com</p>
                  </div>
                </div>
                <div className="px-16 mt-32">
                  <Icon className="footer1__contact__icon">location_on</Icon>
                  <div className="pl-16">
                    <h5 className="m-0 p-0">Địa chỉ</h5>
                    <p className="m-0 p-0">Công viên phần mềm Quang Trung, Tòa nhà SBI, Tân Chánh Hiệp, Quận 12</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <div className="footer1__disclaimer">
                <h4>Kết nối với NetS</h4>
                <p>
                </p>

                <div className="mt-32 footer1__disclaimer__link">
                  <a href="#linkedin" className="px-8">
                    <img src="./assets/images/social-linkedin.png" alt="" />
                  </a>
                  <a href="#twitter" className="px-8">
                    <img src="./assets/images/social-twitter.png" alt="" />
                  </a>
                  <a href="#facebook" className="px-8">
                    <img src="./assets/images/social-facebook.png" alt="" />
                  </a>
                  
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Footer1;

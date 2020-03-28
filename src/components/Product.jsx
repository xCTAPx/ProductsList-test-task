import React, { Component } from "react";
import Purchase from "./Purchase.jsx";
import Price from "./Price.jsx";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
  }

  getCode(code) {
    let res = [];
    const arr = this.props.product.code.split("");
    return code.replace(/00000/, "");
  }

  getPack(str) {
    let res = str.match(/=\s?\d\.\d\d/);
    if (res) {
      res = str.match(/\s?\d\.\d\d/)
      return { status: true, result: res };
    }
    return { status: false };
  }

  getAssocProducts(str) {
    let arr = str.split(";");
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === "") arr.splice(i, 1);
    }
    for (let i = 0, len = arr.length; i < len; i++) {
      arr[i] = arr[i] + ",";
    }
    if (arr[arr.length - 1]) {
      let old = arr[arr.length - 1];
      arr[arr.length - 1] = old.replace(',', '.');
    }
    if (arr.length) {
      return (<div className="product_tags hidden-sm">
        <p>Могут понадобиться:&nbsp;</p>
        {arr.map((elem, index) => <a href="#" className="url--link" key={index}>
          {elem}&nbsp;
      </a>)}
      </div>)
    }
  }

  imageModify(imgUrl) {
    let imgName = imgUrl.split(".");
    imgName[imgName.length - 2] = `${imgName[imgName.length - 2]}_220x220_1`;
    return imgName.join(".");
  }

  render() {
    return (
      <div className="product product_horizontal">
        <span className="product_code">Код: {this.getCode(this.props.product.code)}</span>
        <div className="product_status_tooltip_container">
          <span className="product_status">Наличие</span>
        </div>
        <div className="product_photo">
          <a href="#" className="url--link product__link">
            <img src={"http://" + this.imageModify(this.props.product.primaryImageUrl)} />
          </a>
        </div>
        <div className="product_description">
          <a href="#" className="product__link">
            {this.props.product.title}
          </a>
        </div>
        {this.getAssocProducts(this.props.product.assocProducts)}
        <Price product={this.props.product} />
        <div className="list--unit-padd"></div>
        <div className="list--unit-desc">
          <div className="unit--info">
            <div className="unit--desc-i"></div>
            <div className="unit--desc-t">
              <p>
                {this.getPack(this.props.product.title).status ?
                  (<React.Fragment><span className="ng-binding">&nbsp;Продается упаковками:</span>
                    <span className="unit--infoInn">
                      &nbsp;1 упак. = {this.getPack(this.props.product.title).result} м. кв.
                    </span></React.Fragment>) : (<span className="ng-binding">&nbsp;Продается упаковками</span>)
                }
              </p>
            </div>
          </div>
        </div>
        <Purchase product={this.props.product} />
      </div>
    );
  }
}

export default ProductsPage;
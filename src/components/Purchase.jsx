import React, { Component } from "react";

class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 }
        this.inpRef = React.createRef();

        this.handleChangeCount = this.handleChangeCount.bind(this);
        this.handleCountPlus = this.handleCountPlus.bind(this);
        this.handleCountMinus = this.handleCountMinus.bind(this);
    }

    handleChangeCount() {
        if (isNaN(this.inpRef.current.value)) return;
        this.setState({ count: +this.inpRef.current.value })
    }

    handleCountPlus() {
        this.setState({ count: this.state.count + 1 })
    }

    handleCountMinus() {
        if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className="product__wrapper">
                <div className="product_count_wrapper">
                    <div className="stepper">
                        <input
                            className="product__count stepper-input"
                            type="text"
                            value={this.state.count}
                            onChange={this.handleChangeCount}
                            ref={this.inpRef}
                        />
                        <span className="stepper-arrow up" onClick={this.handleCountPlus}></span>
                        <span className="stepper-arrow down" onClick={this.handleCountMinus}></span>
                    </div>
                </div>
                <span
                    className="btn btn_cart"
                    data-url="/cart/"
                    data-product-id={this.props.product.productId}
                >
                    <svg className="ic ic_cart">
                        <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="#cart"
                        ></use>
                    </svg>
                    <span className="ng-binding">В корзину</span>
                </span>
            </div>
        )
    }
}

export default Purchase;
import React, { Component } from "react";

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: "count", classes: ["unit--select unit--active", "unit--select"] }

        this.handleCount = this.handleCount.bind(this);
        this.handlePack = this.handlePack.bind(this);
    }

    countBonuses(price) {
        return (price / 1.69).toFixed(2);
    }

    handleCount() {
        this.setState({ checked: "count", classes: ["unit--select unit--active", "unit--select"] })
    }

    handlePack() {
        this.setState({ checked: "packs", classes: ["unit--select", "unit--select unit--active"] })
    }

    render() {
        return (
            <React.Fragment>
                <div className="product_units">
                    <div className="unit--wrapper">
                        <div className={this.state.classes[0]}>
                            <p className="ng-binding" onClick={this.handleCount}>За {this.props.product.unitAlt}</p>
                        </div>
                        <div className={this.state.classes[1]}>
                            <p className="ng-binding" onClick={this.handlePack}>За упаковку</p>
                        </div>
                    </div>
                </div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">
                        По карте&nbsp;&nbsp;
        <br />
        клуба&nbsp;&nbsp;
      </span>
                    {this.state.checked === "count" ? <span className="goldPrice">{this.props.product.priceGoldAlt.toFixed(2)}&nbsp;</span> :
                        <span className="goldPrice">{this.props.product.priceGold.toFixed(2)}&nbsp;</span>}
                    <span className="rouble__i black__i">
                        <svg
                            version="1.0"
                            id="rouble__b"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            width="30px"
                            height="22px"
                            viewBox="0 0 50 50"
                            enableBackground="new 0 0 50 50"
                            xmlSpace="preserve"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#rouble_black"
                            ></use>
                        </svg>
                    </span>
                </p>
                <p className="product_price_default">
                    {this.state.checked === "count" ? <span className="retailPrice">{this.props.product.priceRetailAlt.toFixed(2)}&nbsp;</span> :
                        <span className="retailPrice">{this.props.product.priceRetail.toFixed(2)}&nbsp;</span>}
                    <span className="rouble__i black__i">
                        <svg
                            version="1.0"
                            id="rouble__g"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            width="30px"
                            height="22px"
                            viewBox="0 0 50 50"
                            enableBackground="new 0 0 50 50"
                            xmlSpace="preserve"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#rouble_gray"
                            ></use>
                        </svg>
                    </span>
                </p>
                <div className="product_price_points">
                    {this.state.checked === "count" ? <p className="ng-binding">Можно купить за {this.countBonuses(this.props.product.priceRetailAlt.toFixed(2))} балла</p> :
                        <p className="ng-binding">Можно купить за {this.countBonuses(this.props.product.priceRetail.toFixed(2))} балла</p>}
                </div>
            </React.Fragment>
        )
    }
}

export default Price;
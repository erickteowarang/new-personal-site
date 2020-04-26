import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import dimensions from "styles/dimensions";

const BrandsContainer = styled("div")`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media (max-width:${dimensions.maxwidthMobile}px) {
        justify-content: space-around;
    }
`

const BrandImage = styled("img")`
    height: 62px;
    margin-top: 2em;

    @media (max-width:${dimensions.maxwidthTablet}px) {
        margin-left: 1em;
        margin-right: 1em;
    }
`

const Brands = ({ brandLogos }) => (
    <BrandsContainer>
        {brandLogos.map((singleBrand, i) => (
            <BrandImage 
                src={singleBrand.brand_logo.url}
                alt={singleBrand.brand_logo.alt}
            />
        ))}
    </BrandsContainer>
)

export default Brands;

Brands.propTypes = {
    brandLogos: PropTypes.array.isRequired,
};
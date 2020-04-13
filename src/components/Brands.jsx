import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const BrandsContainer = styled("div")`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

const BrandImage = styled("img")`
    height: 62px;
    margin-top: 2em;
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
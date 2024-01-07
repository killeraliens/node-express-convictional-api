function formatProductsFromConvictional(rawProducts) {
    const formattedProducts = rawProducts.map(p => formatProductFromConvictional(p))
    return formattedProducts;
}

function formatProductFromConvictional(rawProduct) {
    const formattedProduct = {
        code: rawProduct.id, // assumed mapping
        title: rawProduct.title || "",
        vendor: rawProduct.vendor || "",
        bodyHtml: rawProduct.body_html || "",
        variants: rawProduct.variants.map(v => formatVariantFromConvictional(v)) ?? [], // format 
        images: formatImagesFromConvictionalVariants(rawProduct.variants) ?? [] // collect images from the variants
    }
    
    return formattedProduct; 
}

function formatVariantFromConvictional(rawVariant) {
    const formattedVariant = {
        id: rawVariant.id || "",
        title: rawVariant.title || "",
        sku: rawVariant.sku || "",
        available: (rawVariant.inventory_quantity ?? 0) === 0 ? false : true, // True if inventory > 0, false otherwise
        inventoryQuantity: rawVariant.inventory_quantity || 0, // Inventory for given variant, should be 0 if no information provided
        weight: formatWeight(rawVariant.weight, rawVariant.weight_unit),
    }
    // question: add inventoryQuantity and available values to each variant using a Store-inventory call?
    return formattedVariant;
}

function formatImage(rawImage, variantId) {
    const formattedImage = {
        source: rawImage.src,
        variantId: variantId,
    }
    return formattedImage;
}

function formatWeight(weight, weightUnit) {
    return {
        value: weight,
        unit: weightUnit
    }
}

function formatImagesFromConvictionalVariants(rawVariants) {
    let formattedImages = []
    for (let i = 0; i < rawVariants.length; i++) {
        if (rawVariants[i].images) {
            const variantId = rawVariants[i].id;
            const variantFormattedImages = rawVariants[i].images.map(image => formatImage(image, variantId)) ?? [];
            formattedImages = formattedImages.concat(variantFormattedImages)
        }
    }
    return formattedImages;
}
module.exports = { formatProductsFromConvictional, formatProductFromConvictional };
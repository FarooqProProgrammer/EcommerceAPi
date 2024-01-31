import requests

def post_product(data):
    url = "http://localhost:3100/product/products"
    headers = {"Content-Type": "application/json"}
    payload = {
        "name": data.get("name"),
        "price": data.get("price"),
        "description": data.get("description"),
        "category": data.get("category"),
        "imageUrl": "https://example.com/placeholder-image.jpg",  # Placeholder image URL
        "Size": data.get("Size"),
        "Color": data.get("Color"),
        "Tags": data.get("Tags"),
        "Brand": data.get("Brand"),
        "AdditionalInformation": data.get("AdditionalInformation"),
        "SizeGuide": data.get("SizeGuide"),
        "Review": data.get("Review"),
    }

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        print("Product successfully added.")
    else:
        print("Failed to add product. Status code:", response.status_code)

# Example data
product_data = {
    "name": "Example Product",
    "price": "19.99",
    "description": "This is an example product description.",
    "category": "Example Category",
    "Size": "Large",
    "Color": "Red",
    "Tags": "example, test",
    "Brand": "Example Brand",
    "AdditionalInformation": "Additional information about the product.",
    "SizeGuide": "Link to size guide",
    "Review": "Example review.",
}

# Call the function with the example data
post_product(product_data)

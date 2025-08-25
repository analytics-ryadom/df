
const stg_lavka__warehouses = {
   additional_phone_number: "A second phone number of warehouse",
   additional_properties: "Contane some properities in json-structure",
   address: "A warehouses addres",
   cashbox_unique_number: "A cashbox number",
   city_id: "An id of the city where the warehouse is located",
   closes_at: "The time whene the warehouse is closed",
   created_at: "The UTC timestamp whene the warehouse was create",
   created_by: "An employees id who created this entry",
   delivery_time: "No one knows",
   delivery_zone: "The delivery zone json data",
   delivery_zone_geo: "The delivery zone geo data",
   delivery_zone_multi_geo: "The delivery zone multigeo data",
   detailed_address: "Detailed street address of the warehouse",
   force_min_amount: "Minimum order amount enforced for deliveries from the warehouse",
   geo_wkt: "Well-known text representation of the warehouse's geographical location",
   has_internship: "Indicates whether the warehouse offers internship programs",
   id: "Unique identifier for the warehouse",
   is_active: "Indicates whether the warehouse is currently active",
   is_functioning: "Indicates whether the warehouse is currently functioning",
   lat: "Latitude coordinate of the warehouse location",
   long: "Longitude coordinate of the warehouse location",
   min_amount: "Minimum order amount for deliveries from the warehouse",
   name: "Name of the warehouse",
   opens_at: "Time of day when the warehouse opens",
   phone_number: "Primary phone number for the warehouse",
   products_quantity: "Number of products stored in the warehouse",
   updated_at: "Timestamp of the last update to the warehouse record",
   updated_by: "Identifier of the user who last updated the warehouse record",
   uuid: "Universally unique identifier for the warehouse",
   launch_id: "Identifier for the launch associated with the warehouse"
  };

const stg_lavka__order_items = {
    created_at: "Timestamp when the item was added to the order",
    feature_id: "Feature ID (e.g., variation like flavor/type)",
    id: "Unique item record ID",
    is_available: "Whether the item was available during picking",
    mark: "Product mark (e.g., batch or date label)",
    order_id: "Order ID this item belongs to",
    original_price: "Original price of the item before discount",
    price: "Final price of the item after discounts",
    product_id: "Product ID",
    reason: "Reason for item rejection or return",
    reason_type: "Reason type",
    refund_id: "Refund ID, if a refund was processed",
    return_request_id: "Return request ID",
    scanned_at: "Timestamp when the item was scanned during picking",
    status: "Item status",
    supplier_price: "Supplier price",
    supplier_product_id: "Supplier-side product ID",
    launch_id: "Launch or version ID",
    promo_source: "Promotion source"

};

const stg_lavka__additional_order_items = {
    created_at: "Timestamp when the item was added to the order",
    high_delivery_price: "This order was delivered with high delivery price",
    id: "Unique item record ID",
    order_id: "Order ID this item belongs to",
    original_price: "Original price of the item before discount",
    price: "Final price of the item after discounts",
    product_id: "Product ID",
    reason: "Reason for item rejection or return",
    reason_type: "Reason type",
    refund_id: "Refund ID, if a refund was processed",
    status: "Item status",
    launch_id: "Launch or version ID"

}



module.exports = {
  stg_lavka__warehouses,
  stg_lavka__order_items,
  stg_lavka__additional_order_items
};
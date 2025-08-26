/////////////////////////////// Lavka ///////////////////////////////
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

};

const stg_lavka__additional_products = {
    created_at: "Timestamp when this row added to table",
    id: "Unique record ID",
    is_active: "Indicates whether the ones is currently active",
    name: "Additional product name",
    type: "Additional product type",
    updated_at: "Timestamp when this row was updated",
    uuid: "Universally unique identifier for the Additional product (1C feature)",
    launch_id: "Launch or version ID"

};

const stg_lavka__preorders = {
  address_comment: "Address comment",
  created_at: "Preorder creation timestamp",
  customer_last_name: "Customer’s last name",
  customer_name: "Customer’s first name",
  customer_phone_number: "Customer phone number",
  delivery_type: "Delivery type",
  device_id: "Device ID from which the preorder was made",
  entrance: "Entrance number",
  flat_number: "Apartment number",
  floor: "Floor",
  hash: "Hash for uniqueness or identification",
  id: "Unique record ID",
  idempotency_key: "Idempotency key to prevent duplication",
  lat: "Latitude of the delivery address",
  leave_at_the_door: "Leave at the door flag",
  less_packages: "Less packeges, please!",
  long: "Longitude of the delivery address",
  paid_at: "Timestamp of payment",
  payment_deeplink: "Payment deeplink URL",
  promocode_id: "ID of the applied promo code",
  street: "Delivery street",
  user_id: "ID of the user who made the preorder",
  user_iin: "Users IIN (individual identification number)",
  warehouse_id: "Warehouse (dark store) ID",
  launch_id: "Launch or version ID",
  free_delivery: "Indicates free delivery",
  customer_address_id: "ID of customer’s saved address",
  comment: "General preorder comment",
  payment_id: "Payment ID in external payment system",
  provider_user_id: "External provider user ID"
    

};

/////////////////////////////// Courier ///////////////////////////////
const stg_courier__courier_motivations = {
    amount: "Мoney for motivation",
    courier_id: "Unique courier id",
    created_at: "Timestamp when this row added to table",
    employee_id: "Unique employee id",
    employee_rate_id: "An employees rate id",
    got_bonus: "Indicates that courier gets bonuses",
    got_bonus_turned_on: "Indicates that got_bonus feature is turner on or not",
    id: "Unique record ID",
    is_intern: "This employee is intern ",
    motivation_program_id: "Unique motivation program id",
    order_id: "An order delivered by courier in this case",
    paid_amount: "How much paid for this motivation",
    polygon_id: "Polygon id where it was",
    shift_id: "Couriers shift id",
    surge_bonus: "Bonuses by surge",
    surge_coefficient: "Surge coefficient",
    launch_id: "Launch or version ID",
    rider_coefficient: "Riders coefficient",
    polygon_data: "JSON contanes a polygon data",
    paid_rider_coefficient: "The coefficient that was applied to the payment"

};

const stg_courier__motivation_programs = {
    amount: "Мoney for motivation",
    bonus_type: "Bonus type",
    created_at: "Timestamp when this row added to table",
    created_by: "Who added a motivation program",
    employee_rate_id: "An employees rate id",
    from_eta: "Lower eta range limit",
    from_radius: "Lower radius range limit",
    id: "Unique record ID",
    is_active: "Indicates whether the ones is currently active",
    rider_x_coefficient: "For RiderX coefficient",
    surge_bonuses: "Bonuses by surge",
    time: "Еarget time",
    to_eta: "Upper eta range limit",
    to_radius: "Upper radius range limit",
    updated_at: "Timestamp when this row was updated",
    updated_by: "Who udated a motivation program",
    warehouse_id: "Unique identifier for the warehouse",
    launch_id: "Launch or version ID"

};

/////////////////////////////// Lavka_surge ///////////////////////////////
const stg_lavka_surge__surge_logs = {
    additional_data: "JSON contanes a surge decision data",
    decision: "Indicates that the surge is on",
    decision_made_at: "Datetime of surge decision",
    id: "ID of surge decision",
    min_amount: "The minimum basket price set by surge",
    min_amount_enabled: "The minimum basket price is enable",
    next_decision_at: "Datetime until which this decision is valid",
    request_uuid: "Universally unique identifier for surge decision",
    test_mode: "It's test decision",
    warehouse_id: "The warehouse where this decision operates",
    launch_id: "Launch or version ID"

}

module.exports = {
  stg_lavka__warehouses,
  stg_lavka__order_items,
  stg_lavka__additional_order_items,
  stg_lavka__additional_products,
  stg_lavka__preorders,
  stg_courier__courier_motivations,
  stg_courier__motivation_programs,
  stg_lavka_surge__surge_logs
};



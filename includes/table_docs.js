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

const stg_lavka__products = {
    analytical_category_id: "ID of the analytical category to which the product belongs.",
    brand_id: "	The identifier of the brand under which the product is produced.",
    country: "country",
    created_at: "The date and time when the record was created in the table.",
    created_by: "The ID of the user who created the record.",
    daily_max_quantity: "",
    degree_level: "",
    degree_value: "",
    depth: "",
    full_description: "Full text description of the product.",
    full_description_kk: "Full description of the product in Kazakh.",
    has_brand: "Indicates whether the product has a brand (true — there is a brand).",
    height: "The height of the product packaging (in centimeters).",
    id: "The internal unique identifier of the product.",
    is_active: "Indicates that the product is active (true — available for sale).",
    is_sample: "Whether the product is a sample or a test copy.",
    keywords: "Keywords related to the product",
    keywords_kk: "Keywords in the Kazakh language.",
    labels: "",
    max_quantity: "",
    name: "The main product name.",
    name_kk: "The product name is in Kazakh.",
    name_origin: "Original name (e.g., in native language).",
    name_short: "Short name.",
    name_short_kk: "Short name in Kazakh",
    one_day_sale: "One-day sale flag.",
    sort_weight: "",
    type_uuid: "Product type UUID.",
    updated_at: "Last update timestamp.",
    updated_by: "ID of the user who last updated the record",
    uuid: "Globally unique product UUID",
    weight: "Product weight in grams",
    weight_visible: "",
    width: "Width of packaging (in cm).",
    wine_color: "Wine color (e.g., red, white)",
    wine_sugar_content: "Wine sugar content (e.g., dry, semi-sweet)",
    launch_id: "",
    is_promo: "Indicates if product is on promotion.",
    is_coffee: "Indicates if the product is coffee"
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

const stg_lavka__orders_lavka = {
    address_comment: "comments written by user to specify address details",
    building: "building number",
    cancel_reason: "reason of order cancellation",
    code: "order code shown to user in an app",
    comment: "user comment for order",
    created_at: "order creation time",
    customer_last_name: "last name of user",
    customer_name: "first name of user",
    customer_phone_number: "phone number of user",
    delivery_type: "code of delivery type",
    entrance: "entrance number for address",
    flat_number: "flat number of address",
    floor: "floor of address",
    has_discount: "does order has discount",
    id: "identificator of order",
    idempotency_key: "idempotency_key",
    is_fraud: "flag of antifraud service",
    lat: "latitude of address",
    leave_at_the_door: "flag to leave order at the door",
    less_packages: "flag to use less packages for order",
    long: "longitude for address",
    paid_at: "payment time",
    picker_id: "identificator of picker who collected order",
    preorder_id: "identificator of preorder",
    price: "price user paid for order multiplied by 100",
    products: "goods in order",
    promocode_id: "identificator of promocode",
    reference: "reference to rahmet payments",
    shelf: "shelf number where order has been placed after it was collected",
    status: "status code of order",
    street: "address",
    street_name: "street name of address",
    user_id: "identificator of user",
    user_iin: "iin of user",
    warehouse_id: "identificator of the warehouse where order has been placed",
    launch_id: "identificator of launch",
    free_delivery: "was delivery free",
    payment_id: "uuid of indrive payments",
    provider_user_id: "provider"

};

const stg_lavka__preorders = {
  address_comment: "Address comment",
  created_at: "Preorder creation timestamp",
  customer_last_name: "Customers last name",
  customer_name: "Customers first name",
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
  customer_address_id: "ID of customers saved address",
  comment: "General preorder comment",
  payment_id: "Payment ID in external payment system",
  provider_user_id: "External provider user ID"
    

};

const stg_lavka__order_status_history = {
    created_at: "timestamp of status change",
    id: "identificator of row",
    order_id: "identificator of an order",
    status: "status code",
    launch_id: "id of the launch"
    
};

const stg_lavka__cities = {
    created_at: "timestamp of status change",
    id: "identificator of row",
    name: "Name of city",
    updated_at: "update timestamp",
    launch_id: "id of the launch"
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

const stg_courier__orders = {
    address: "Delivery address (usually without entrance or apartment)",
    address_comment: "Comment on the delivery address",
    auto_finish_at: "Time when the order will be auto-finished (e.g., by timeout)",
    batch_id: "Batch ID (group of orders)",
    building: "Building number",
    cell: "Storage or delivery cell (if applicable)",
    client_id: "Client ID in the system",
    client_latitude: "Clients latitude (delivery point)",
    client_longitude: "Clients longitude (delivery point)",
    client_name: "Clients name",
    client_phone: "Clients phone number",
    code: "Order confirmation code",
    comment_for_courier: "Comment for courier",
    comment_for_picker: "Comment for picker",
    courier_id: "Courier ID",
    courier_motivation_amount: "Courier motivation amount",
    courier_motivation_time: "Courier motivation time window",
    created_at: "Order creation timestamp",
    delivered_time: "Actual delivery time",
    delivery_time_prediction: "Predicted delivery time",
    distance_to_warehouse: "Distance to warehouse (in meters)",
    entrance: "Entrance",
    flat: "Apartment number",
    floor: "Floor",
    full_address: "Full delivery address",
    has_alcohol: "Whether the order contains alcohol",
    has_coffee: "Whether the order contains coffee",
    has_tobacco: "Whether the order contains tobacco",
    id: "Unique order ID",
    is_distant: "Is the address considered distant",
    leave_at_the_door: "Leave at the door",
    less_packages: "Use less packaging",
    min_amount: "Minimum order amount",
    order_id: "External system order ID",
    order_items: "Order items (e.g., JSON string of product list)",
    payment_method: "Payment method",
    picker_assigned_at: "Picker assignment timestamp",
    picker_id: "Picker ID",
    price: "Total order price",
    status: "Order status (e.g., “in picking”, “delivered”)",
    status_updated_at: "Timestamp of last status update",
    street_name: "Street name",
    version: "Order version",
    volume: "Order volume (in abstract units)",
    warehouse_address: "Warehouse address",
    warehouse_id: "Warehouse ID",
    warehouse_latitude: "Warehouse latitude",
    warehouse_longitude: "Warehouse longitude",
    weight: "Order weight (in kg)",
    launch_id: "Launch or configuration ID",
    comment: "General order comment",
    has_energy_drinks: "Whether the order contains energy drinks",
    distance_to_warehouse_by_bicycle: "Bicycle distance to warehouse (in meters)"

};

const stg_courier__order_status_history = {
    created_at: "Timestamp of the status change",
    employee_id: "ID of the employee who changed the status (if applicable)",
    id: "Unique history record ID",
    idempotency_key: "Idempotency key to prevent duplicate status updates",
    order_id: "Order ID the status change belongs to",
    type: "New order status (e.g., created, order_received)",
    version: "Version of the record or system where the status change occurred",
    launch_id: "Launch or configuration ID under which the status change was recorded"

};

const stg_courier__order_assignment  = {
    assigned_by: "Who's assignment by",
    created_at: "Timestamp of the status change",
    employee_id: "ID of the employee Who's assignment by",
    id: "Unique history record ID",
    order_id: "order id",
    type: "Picker or courier",
    launch_id: "Launch or configuration ID under which the status change was recorded"
};

const stg_courier__batches = {
    batch_type: "Type of batch",
    created_at: "Timestamp when the batch was created",
    delivery_type: "Delivery type",
    id: "Unique batch ID",
    latitude: "Latitude of the batch delivery location",
    longitude: "Longitude of the batch delivery location",
    max_quantity: "Maximum number of orders in the batch",
    ready_time: "Time when the batch is fully ready for delivery",
    status: "Current status of the batch",
    updated_at: "Last time the batch record was updated",
    version: "Version of the configuration or schema",
    warehouse_id: "ID of the warehouse from which the batch is formed",
    launch_id: "Launch/config ID associated with the batch"

};

const stg_courier__courier_batch_history = {
    batch_id: "D of the batch (group of orders)",
    created_at: "Timestamp when the batch history record was created",
    employee_id: "Employee id",
    id: "Unique ID of the history record",
    type: "Type of action related to the batch (e.g., assigned, accepted, delivered)",
    uuid: "Unique UUID identifier of the batch",
    launch_id: "Launch ID or configuration version under which the batch was processed",
    delivered_at: "Timestamp when the batch was delivered"    
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

};

/////////////////////////////// promo ///////////////////////////////
const stg_promo__promocodes = {
    activation_count : "Number of times the promo code has been used.",
    activation_limit : "Maximum number of times the promo code can be used.",
    conditions : "Conditions or terms associated with the promo code.",
    created_at : "Timestamp indicating when the promo code was created.",
    created_by : "Identifier of the user who created the promo code.",
    deleted_at : "Timestamp indicating when the promo code was deleted.",
    expired_at : "Timestamp indicating when the promo code expires.",
    id : "Unique identifier for the promo code.",
    is_active : "Boolean value indicating whether the promo code is currently active",
    prefix : "Prefix associated with the promo code.",
    promo_type : "Type of promotion associated with the code",
    promoaction_id : "Identifier of the promotional action associated with the promo code",
    promocode : "The actual promo code string",
    recipient_id : "Identifier of the recipient associated with the promo code.",
    referral_id : "Identifier of the referral associated with the promo code",
    updated_at : "Timestamp indicating when the promo code was last updated.",
    updated_by : "Identifier of the user who last updated the promo code.",
    launch_id : "Identifier of the launch associated with the promo code.",
    acquisition_channel_id : "Identifier of the acquisition channel associated with the promo code",
    comment : "Additional notes or information about the promo code"

};

/////////////////////////////// ryadom_identity ///////////////////////////////
const stg_ryadom_identity__internal_external_user_links = {
    created_at: "Timestamp when the record was created",
    deleted_at: "Timestamp when the record was deleted",
    external_provider_id: "provider id",
    external_user_id: "user id",
    id: "Unique ID of row",
    internal_user_id: "internal DB user id",
    launch_id: "Launch or version ID"
};

const stg_ryadom_identity__external_providers = {
    auth_url_template: "",
    created_at: "",
    id: "",
    jwks_uri: "",
    name: "",
    pkce_enabled: "",
    token_endpoint: "",
    updated_at: "",
    user_info_endpoint: "",
    launch_id: ""
}




module.exports = {
  stg_lavka__warehouses,
  stg_lavka__order_items,
  stg_lavka__additional_order_items,
  stg_lavka__additional_products,
  stg_lavka__orders_lavka,
  stg_lavka__preorders,
  stg_courier__courier_motivations,
  stg_courier__motivation_programs,
  stg_courier__orders,
  stg_courier__order_status_history,
  stg_courier__batches,
  stg_courier__courier_batch_history,
  stg_courier__order_assignment,
  stg_lavka_surge__surge_logs,
  stg_lavka__order_status_history,
  stg_lavka__cities,
  stg_ryadom_identity__internal_external_user_links,
  stg_ryadom_identity__external_providers,
  stg_promo__promocodes
};



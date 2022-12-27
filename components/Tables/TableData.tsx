/** @format */
// Organization
export const OrganizationData = [
  {
    organization_id: "924671ba-eab9-45d7-95ed-dbd9477f182b",
    tenant_id: "924671ba-eab9-45d7-95ed-dbd9477f182b",
    name: "McDonalds",
    status: "active",
    creation_date: "2023-01-21T11:28:59Z",
    notes: "This organization is inactive for non-payment.",
    discounts: [
      {
        organization_id: "924671ba-eab9-45d7-95ed-dbd9477f182b",
        offer_id: "924671ba-eab9-45d7-95ed-dbd9477f182b",
        name: "Microsoft 365 E3",
        description: "Welcome to Microsoft 365. This service offers...",
        sku: "1",
        discount_percent: 10,
      },
    ],
  },
];

// OrganizationDiscountPage
export const OrganizationDiscountData = [
  {
    id: 1,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id: 2,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id: 3,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id: 4,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id: 5,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id: 6,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
];
export const SubscriptionData = [
  {
    id: "924671ba-eab9-45d7-95ed-dbd9477f182b",
    offer_id: "DG7GMGF0FKZV:0003:DG7GMGF0DQLM",
    offer_name: "SQL Server Enterprise - 2 Core License Pack - 3 year",
    offer_description:
      "Microsoft 365 E3 combines best-in-class productivity apps with core security and compliance capabilities.",
    quantity: 1,
    creation_date: "2021-10-15T21:28:19.3058617Z",
    effective_start_date: "2021-10-15T21:28:18.4786844Z",
    commitment_end_date: "2024-10-14T00:00:00Z",
    cancellation_allowed_until_date: "2021-11-14T23:59:00Z",
    billing_cycle: "annual",
    billing_type: "license",
    term_duration: "P3Y",
    will_auto_renew: false,
    is_trial: false,
    is_nce: true,
    status: "active",
  },
];
// Orders
export const OrderData = [
  {
    id: "9qg-ErcO-4MPbPqq_3MIQaS7bn8W6HfG1",
    customer_id: "b0d70a69-4c42-4b27-b17b-91a835d8686a",
    creation_date: "2018-03-15T02:17:15.6455674Z",
    line_items: [
      {
        id: "1923-2395-23950-923052395059",
        offer_id: "DZH318Z0BQ4B:000Z:DZH318Z0DSPL",
        position: 0,
        offer_name: "Reserved_VM_Instance_Standard_D1_AP_East_1_Year",
        quantity: 1,
        subtotal_price: 2400,
        billing_cycle: "annual",
        billing_type: "license",
        term_duration: "P3Y",
        offer_sku: "1",
      },
    ],
    currency_code: "USD",
    billing_cycle: "annual",
    monthly_price: 1000,
    total_price: 12000,
    status: "pending",
  },
];

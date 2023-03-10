/** @format */

import { AppImages } from "../../shared/images";
export const SubModAppImages = AppImages;

export enum BillingType {
  Monthly = "Montly",
  Anually = "Annually",
}

export enum SubscriptionType {
  Full = "Full",
  Yearly = "Yearly",
  Monthly = "Monthly",
}

export enum GeneralStatus {
  Active = "Active",
  Deactive = "Deactive",
  Suspended = "Suspended",
}

export enum Modules {
  Subscription = "subscription",
  Catalog = "catalog",
  Order = "order",
  Support = "support",
  Organization = "organization",
}

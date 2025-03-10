export enum UsNeField {
  VERSION = "Version",
  PROCESSING_NOTICE = "ProcessingNotice",
  SALE_OPT_OUT_NOTICE = "SaleOptOutNotice",
  TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice",
  SALE_OPT_OUT = "SaleOptOut",
  TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut",
  SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing",
  KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents",
  ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent",
  MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction",
  MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode",
  MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode",

  GPC_SEGMENT_TYPE = "GpcSegmentType",
  GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded",
  GPC = "Gpc",
}

export const USNE_CORE_SEGMENT_FIELD_NAMES = [
  UsNeField.VERSION,
  UsNeField.PROCESSING_NOTICE,
  UsNeField.SALE_OPT_OUT_NOTICE,
  UsNeField.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
  UsNeField.SALE_OPT_OUT,
  UsNeField.TARGETED_ADVERTISING_OPT_OUT,
  UsNeField.SENSITIVE_DATA_PROCESSING,
  UsNeField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
  UsNeField.ADDITIONAL_DATA_PROCESSING_CONSENT,
  UsNeField.MSPA_COVERED_TRANSACTION,
  UsNeField.MSPA_OPT_OUT_OPTION_MODE,
  UsNeField.MSPA_SERVICE_PROVIDER_MODE,
];

export const USNE_GPC_SEGMENT_FIELD_NAMES = [UsNeField.GPC_SEGMENT_TYPE, UsNeField.GPC];

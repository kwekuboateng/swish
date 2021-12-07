var remitone = $("#remitone-calculator").calculator({
  base_url: "https://test.remit.by/momoworldtest",
  submit_url: "https://test.remit.by/momoworldonlinetest/prices/send_money",
  orientation: "vertical",
  order: [
    "source_amount_currency",
    "destination_amount_currency",
    "fees_charge_promo_applied_rate",
    "error_message",
    "send_money",
  ],
  source_amount_currency: {
    render: null,
    label: "You send",
    defaultAmountValue: 1000,
    defaultCurrencyValue: null,
  },
  destination_amount_currency: {
    render: null,
    label: "Beneficiary gets",
    defaultAmountValue: null,
    defaultCurrencyValue: null,
  },
});

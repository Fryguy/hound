require "rails_helper"

RSpec.describe AccountPage do
  describe "#monthly_line_item" do
    it "returns the subscription as a monthly line item" do
      subscription = instance_double(PaymentGatewaySubscription)
      page = AccountPage.new(
        billable_email: "somebody@example.com",
        subscription: subscription,
        repos: [create(:repo)],
      )

      expect(page.monthly_line_item).to eq MonthlyLineItem.new(subscription)
    end
  end

  describe "#total_monthly_cost" do
    it "returns the subtotal of the line item in dollars" do
      coupon = double(:coupon, valid: false)
      discount = double(:discount, coupon: coupon)
      subscription = instance_double(
        PaymentGatewaySubscription,
        quantity: 1,
        plan_amount: 200_00,
        discount: discount,
      )
      page = AccountPage.new(
        billable_email: "somebody@example.com",
        subscription: subscription,
        repos: [create(:repo)],
      )

      expect(page.total_monthly_cost).to eq("$200")
    end
  end
end

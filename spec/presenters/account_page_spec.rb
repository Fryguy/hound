require "rails_helper"

RSpec.describe AccountPage do
  describe "#billable_email" do
    it "returns the user's billable email" do
      billable_email = "somebody@example.com"
      user = double("User")
      page = AccountPage.new(user)

      allow(user).to receive(:billable_email).once.with(no_args).
        and_return(billable_email)

      expect(page.billable_email).to eq billable_email
    end
  end

  describe "#monthly_line_item" do
    it "returns the subscription as a monthly line item" do
      user = double("User")
      subscription = double("PaymentGatewaySubscription")
      page = AccountPage.new(user)

      allow(user).to receive(:payment_gateway_subscription).once.with(no_args).
        and_return(subscription)

      expect(page.monthly_line_item).to eq MonthlyLineItem.new(subscription)
    end
  end

  describe "#pricings" do
    it "returns all of the presentable, available pricings" do
      presenter = instance_double(PricingPresenter)
      pricing = instance_double(Pricing)
      user = double("User")
      page = AccountPage.new(user)

      allow(Pricing).to receive(:all).once.with(no_args).and_return([pricing])
      allow(PricingPresenter).to receive(:new).once.with(
        pricing: pricing,
        user: user,
      ).and_return(presenter)

      expect(page.pricings).to eq [presenter]
    end
  end

  describe "#repos" do
    it "returns the subscriped repos ordered by name" do
      ordered_repos = double("Repo")
      subscribed_repos = double("Repo")
      user = double("User")
      page = AccountPage.new(user)

      allow(subscribed_repos).to receive(:order).once.with(:name).
        and_return(ordered_repos)
      allow(user).to receive(:subscribed_repos).once.with(no_args).
        and_return(subscribed_repos)

      expect(page.repos).to eq ordered_repos
    end
  end

  describe "#subscription" do
    it "returns the user's payment gateway subscription" do
      subscription = double("PaymentGatewaySubscription")
      user = double("User")
      page = AccountPage.new(user)

      allow(user).to receive(:payment_gateway_subscription).once.with(no_args).
        and_return(subscription)

      expect(page.subscription).to eq subscription
    end
  end

  describe "#total_monthly_cost" do
    it "returns the subtotal of the monthly line item in dollars" do
      cost = 200.00
      item = instance_double(MonthlyLineItem)
      subscription = double("PaymentGatewaySubscription")
      user = double("User")
      page = AccountPage.new(user)

      allow(MonthlyLineItem).to receive(:new).once.with(subscription).
        and_return(item)
      allow(item).to receive(:subtotal_in_dollars).once.with(no_args).
        and_return(cost)
      allow(user).to receive(:payment_gateway_subscription).once.with(no_args).
        and_return(subscription)

      expect(page.total_monthly_cost).to eq cost
    end
  end
end

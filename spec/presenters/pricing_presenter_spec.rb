require "rails_helper"

RSpec.describe PricingPresenter do
  describe "#allowance" do
    it "returns the pricing's allowance" do
      user = create(:user)

      pricing = Pricing.new(
        id: "tier1",
        price: 49,
        range: 1..4,
        title: "Chihuahua",
      )
      presenter = PricingPresenter.new(pricing: pricing, user: user)
      expect(presenter.allowance).to eq pricing.allowance
    end
  end

  describe "#current?" do
    it "returns true" do
      membership = create(:membership)
      user = membership.user
      create(:subscription, repo: membership.repo, user: user)

      pricing = Pricing.new(
        id: "tier1",
        price: 49,
        range: 1..4,
        title: "Chihuahua",
      )
      presenter = PricingPresenter.new(pricing: pricing, user: user)
      expect(presenter.current?).to be(true)
    end

    context "when the pricing does not match the user's current pricing" do
      it "returns false" do
        membership = create(:membership)
        user = membership.user
        create(:subscription, repo: membership.repo, user: user)

        pricing = Pricing.new(
          id: "tier2",
          price: 99,
          range: 5..10,
          title: "Labrador",
        )
        presenter = PricingPresenter.new(pricing: pricing, user: user)
        expect(presenter.current?).to be(false)
      end
    end
  end

  describe "#price" do
    it "returns the pricing's price" do
      user = create(:user)

      pricing = Pricing.new(
        id: "tier1",
        price: 49,
        range: 1..4,
        title: "Chihuahua",
      )
      presenter = PricingPresenter.new(pricing: pricing, user: user)
      expect(presenter.price).to eq pricing.price
    end
  end

  describe "#title" do
    it "returns the pricing's title" do
      user = create(:user)

      pricing = Pricing.new(
        id: "tier1",
        price: 49,
        range: 1..4,
        title: "Chihuahua",
      )
      presenter = PricingPresenter.new(pricing: pricing, user: user)
      expect(presenter.title).to eq pricing.title
    end
  end
end

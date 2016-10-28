class PricingsController < ApplicationController
  def index
    @pricings = Pricing.all.map do |pricing|
      PricingPresenter.new(pricing: pricing, user: current_user)
    end
  end
end

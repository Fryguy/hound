class PricingPresenter
  attr_reader :pricing, :user

  delegate :allowance, :price, :title, to: :pricing

  private :pricing, :user

  def initialize(pricing:, user:)
    @pricing = pricing
    @user = user
  end

  def current?
    Tier.new(user).current == pricing
  end
end

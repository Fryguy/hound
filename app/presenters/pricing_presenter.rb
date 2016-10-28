class PricingPresenter
  attr_reader :pricing, :user

  delegate :allowance, :price, :title, to: :pricing

  private :pricing, :user

  def initialize(pricing:, user:)
    @pricing = pricing
    @user = user
  end

  def as_json(_options = nil)
    { current: current?, name: title, price: price, upto: allowance }
  end

  def current?
    Tier.new(user).current == pricing
  end

  def next?
    Tier.new(user).next == pricing
  end
end

class AccountPage
  def initialize(user)
    @user = user
  end

  def billable_email
    user.billable_email
  end

  def monthly_line_item
    MonthlyLineItem.new(subscription)
  end

  def repos
    subscribed_repos.order(:name)
  end

  def subscription
    user.payment_gateway_subscription
  end

  def total_monthly_cost
    monthly_line_item.subtotal_in_dollars
  end

  private

  attr_reader :user

  def subscribed_repos
    user.subscribed_repos
  end
end

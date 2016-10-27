class AccountPage
  include ActionView::Helpers::NumberHelper

  attr_reader :billable_email, :repos, :subscription

  def initialize(repos:, billable_email:, subscription:)
    @billable_email = billable_email
    @repos = repos
    @subscription = subscription
  end

  def monthly_line_item
    MonthlyLineItem.new(subscription)
  end

  def total_monthly_cost
    number_to_currency(
      monthly_line_item.subtotal_in_dollars,
      precision: 0
    )
  end
end

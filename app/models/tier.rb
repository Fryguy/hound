class Tier
  BULK_ID = "bulk".freeze
  TIER1_ID = "tier1".freeze
  TIER2_ID = "tier2".freeze
  TIER3_ID = "tier3".freeze

  TIERS = {
    1..4 => TIER1_ID,
    5..10 => TIER2_ID,
    11..30 => TIER3_ID,
  }.freeze

  attr_reader :user

  def initialize(user)
    @user = user
  end

  def current
    select(count)
  end

  def full?
    self.next != current
  end

  def next
    select(succ)
  end

  private

  def count
    repos.count
  end

  def select(count)
    TIERS.each do |range, id|
      return id if range.include?(count)
    end

    BULK_ID
  end

  def succ
    count.succ
  end

  def repos
    user.subscribed_repos
  end
end

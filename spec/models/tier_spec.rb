require "spec_helper"
require "./app/models/tier"

RSpec.describe Tier do
  describe "#current" do
    it "returns user's current tier" do
      repos = double("Repos", count: 1)
      user = double("User", subscribed_repos: repos)
      tier = Tier.new(user)
      expect(tier.current).to eq(Tier::TIER1_ID)
    end
  end

  describe "full?" do
    it "returns true" do
      repos = double("Repos", count: 4)
      user = double("User", subscribed_repos: repos)
      tier = Tier.new(user)
      expect(tier.full?).to be(true)
    end

    context "when the next tier is not the same as the current tier" do
      it "returns false" do
        repos = double("Repos", count: 3)
        user = double("User", subscribed_repos: repos)
        tier = Tier.new(user)
        expect(tier.full?).to be(false)
      end
    end
  end

  describe '#next' do
    it "returns the 'Bulk' tier" do
      repos = double("Repos", count: 30)
      user = double("User", subscribed_repos: repos)
      tier = Tier.new(user)
      expect(tier.next).to eq(Tier::BULK_ID)
    end

    context "when the user has no subscribed repos" do
      it "returns the 'Tier 1' tier" do
        repos = double("Repos", count: 0)
        user = double("User", subscribed_repos: repos)
        tier = Tier.new(user)
        expect(tier.next).to eq(Tier::TIER1_ID)
      end
    end

    context "when the user has four subscribed repos" do
      it "returns the 'Tier 2' tier" do
        repos = double("Repos", count: 4)
        user = double("User", subscribed_repos: repos)
        tier = Tier.new(user)
        expect(tier.next).to eq(Tier::TIER2_ID)
      end
    end

    context "when the user has ten subscribed repos" do
      it "returns the 'Tier 3' tier" do
        repos = double("Repos", count: 10)
        user = double("User", subscribed_repos: repos)
        tier = Tier.new(user)
        expect(tier.next).to eq(Tier::TIER3_ID)
      end
    end
  end
end

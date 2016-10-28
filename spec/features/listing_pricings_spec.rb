require "rails_helper"

feature "listing pricings" do
  scenario "returns a list of all pricings" do
    user = create(:user)
    repo = create(:repo)

    sign_in_as(user)
    visit pricings_url(repo_id: repo.id)

    plans = page.all(".plan")
    expect(plans.count).to eq 4

    within(plans[0]) do
      # expect(page).to have_content("Current Plan")

      expect(find(".plan-title").text).to eq "Puppy"
      expect(find(".plan-allowance").text).to eq "Up to 0 Repos"
      expect(find(".plan-price").text).to eq "$0 month"
    end

    within(plans[1]) do
      # expect(page).to have_content("Current Plan")

      expect(find(".plan-title").text).to eq "Chihuahua"
      expect(find(".plan-allowance").text).to eq "Up to 4 Repos"
      expect(find(".plan-price").text).to eq "$49 month"
    end

    within(plans[2]) do
      # expect(page).to have_content("New Plan")

      expect(find(".plan-title").text).to eq "Labrador"
      expect(find(".plan-allowance").text).to eq "Up to 10 Repos"
      expect(find(".plan-price").text).to eq "$99 month"
    end

    within(plans[3]) do
      expect(find(".plan-title").text).to eq "Great Dane"
      expect(find(".plan-allowance").text).to eq "Up to 30 Repos"
      expect(find(".plan-price").text).to eq "$249 month"
    end
  end
end

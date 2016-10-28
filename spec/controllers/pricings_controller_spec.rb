require "rails_helper"

RSpec.describe PricingsController do
  describe "GET 'index'" do
    it "is successful" do
      repo = create(:repo)
      stub_sign_in(create(:user))

      get :index, repo_id: repo.id

      expect(response).to have_http_status(:ok)
    end
  end
end

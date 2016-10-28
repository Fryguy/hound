require "rails_helper"

RSpec.describe PricingsController do
  describe "GET 'index'" do
    it "is successful" do
      stub_sign_in(create(:user))

      get :index

      expect(response).to have_http_status(:ok)
    end
  end
end

module Mailchimp
  class Client
    include HTTParty
    base_uri "https://us16.api.mailchimp.com/3.0"

    def initialize(email)
      @email = email
    end

    def list
      self.class.get("/lists/#{list_id}", basic_auth: auth).parsed_response
    end

    def create_member
      self.class.post("/lists/#{list_id}/members", basic_auth: auth, body: body).parsed_response
    end

    private

      def body
        { email_address: @email, status: "subscribed" }.to_json
      end

      def auth
        { username: 'apikey', password: api_key }
      end

      def list_id
        Rails.application.secrets.mailchimp_list_id
      end

      def api_key
        Rails.application.secrets.mailchimp_key
      end
  end
end
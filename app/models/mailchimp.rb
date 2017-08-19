module Mailchimp
  class Client
    include HTTParty
    base_uri "https://us16.api.mailchimp.com/3.0"

    def initialize(email)
      @email = email
    end

    def list
      p "*"*100
      p self.class.get("/lists/#{list_id}", basic_auth: auth).parsed_response
      p "*"*100
    end

    def create_member
      p "*"*100
      p self.class.post("/lists/#{list_id}/members", basic_auth: auth, body: body).parsed_response
      p "*"*100
    end

    private

      def body
        { email_address: @email, status: "subscribed" }.to_json
      end

      def auth
        { username: 'apikey', password: api_key }
      end

      def list_id
        ENV.fetch("MAILCHIMP_LIST_ID")
      end

      def api_key
        ENV.fetch("MAILCHIMP_KEY")
      end
  end
end
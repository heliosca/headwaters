class SubscriptionsController < ApplicationController

	def create
		Mailchimp::Client.new(params[:email]).create_member
		render plain: "OK"
	end
end
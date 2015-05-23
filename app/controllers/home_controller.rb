class HomeController < ApplicationController
	def index
	end

	def version_one
		render :layout => "version_one"
	end
end
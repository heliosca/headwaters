module ImageUrlHelper
  def hw_image_url(image_name)
		"https://s3-us-west-1.amazonaws.com/headwatersca/images/" << image_name	
  end
end

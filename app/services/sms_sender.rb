require 'uri'
require 'net/http'
require 'net/https'
require 'json'

class SmsSender
  def initialize(phone_number:, message:)
    @phone_number = phone_number
    @message = message
  end

  def send
    message_sent = false
    uri = URI('https://api.afromessage.com/api/send')
    header = {
      'Content-Type' => 'application/json',
      'Authorization' =>
        "Bearer #{Rails.application.credentials.afromessage[:token]}",
    }
    request_body = {
      'callback' => '',
      'from' => '',
      'sender' => 'WeBirr',
      'to' => "+251#{@phone_number.sub(/^[0]/, '')}",
      'message' => @message,
    }

    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true

    request = Net::HTTP::Post.new(uri.request_uri, header)
    request.body = request_body.to_json

    res = https.request(request)

    if res.code == '200'
      response_body = JSON.parse(res.body)
      if response_body['acknowledge'] == 'success'
        message_sent = true
      else
        raise StandardError
      end
    else
      raise StandardError
    end
    return message_sent
  end
end

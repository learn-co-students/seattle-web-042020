class CompaniesController < ApplicationController
  get '/companies' do
    @companies = Company.all
    erb :"companies/index"
  end

  get '/companies/:id' do
    @company = Company.find(params[:id])
    erb :"companies/show"
  end
end
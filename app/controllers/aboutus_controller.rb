class AboutusController < ApplicationController
  before_action :set_aboutu, only: [:show, :edit, :update, :destroy]
    layout "backend"
  before_action :authenticate_user!
  # GET /aboutus
  # GET /aboutus.json
  def index
    @aboutus = Aboutu.all
  end

  # GET /aboutus/1
  # GET /aboutus/1.json
  def show
  end

  # GET /aboutus/new
  def new
    @aboutu = Aboutu.new
  end

  # GET /aboutus/1/edit
  def edit
  end

  # POST /aboutus
  # POST /aboutus.json
  def create
    @aboutu = Aboutu.new(aboutu_params)

    respond_to do |format|
      if @aboutu.save
        format.html { redirect_to @aboutu, notice: 'Aboutu was successfully created.' }
        format.json { render :show, status: :created, location: @aboutu }
      else
        format.html { render :new }
        format.json { render json: @aboutu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /aboutus/1
  # PATCH/PUT /aboutus/1.json
  def update
    respond_to do |format|
      if @aboutu.update(aboutu_params)
        format.html { redirect_to @aboutu, notice: 'Aboutu was successfully updated.' }
        format.json { render :show, status: :ok, location: @aboutu }
      else
        format.html { render :edit }
        format.json { render json: @aboutu.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /aboutus/1
  # DELETE /aboutus/1.json
  def destroy
    @aboutu.destroy
    respond_to do |format|
      format.html { redirect_to aboutus_url, notice: 'Aboutu was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_aboutu
      @aboutu = Aboutu.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def aboutu_params
      params.require(:aboutu).permit(:about)
    end
end

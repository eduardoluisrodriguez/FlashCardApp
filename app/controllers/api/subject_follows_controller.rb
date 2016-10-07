class Api::SubjectFollowsController < ApplicationController

  before_action :ensure_user_logged_in

  def index
    @subjects = current_user.followed_subjects.to_a
    @activeId = @subjects.first.id unless @subjects.empty?
  end
end

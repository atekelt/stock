class AcceptedMailer < ApplicationMailer
    def accepted_email
        @applicant = Applicant.find(params[:id])
        @applicant_custodian_email = ApplicantCustodian.where(applicant_id:params[:id]).first
        mail(
            from: 'school name',
            to: @applicant_custodian_email.email, 
            subject: 'Application Results for ' + @applicant.to_s 
            )
    end

    def denied_email
        @applicant = Applicant.find(params[:id])
        @applicant_custodian_email = ApplicantCustodian.where(applicant_id:params[:id]).first
        mail(
            from: 'school name',
            to: @applicant_custodian_email.email, 
            subject: 'Application Results for ' + @applicant.to_s
            )
    end
end

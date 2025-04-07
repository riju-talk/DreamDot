from django.db import models

# User-related models
class UserProfile(models.Model):
    user_id = models.CharField(max_length=255, primary_key=True)
    username = models.CharField(max_length=255)
    display_name = models.CharField(max_length=255)
    bio = models.CharField(max_length=255)
    avatar_url = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    social_links = models.CharField(max_length=255)
    updated_at = models.DateTimeField()
    dob = models.CharField(max_length=255)

    class Meta:
        db_table = '"user_d"."user_profile"'
        managed = False  # Table is managed by Supabase

class Users(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    password_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    is_verified = models.BooleanField()
    is_active = models.BooleanField()
    pass_salts = models.CharField(max_length=255)
    user_type = models.CharField(max_length=255)

    class Meta:
        db_table = '"user_d"."users"'
        managed = False  # Table is managed by Supabase

class UserSecurity(models.Model):
    user_id = models.CharField(max_length=255, primary_key=True)
    failed_attempts = models.IntegerField()
    last_failed_login = models.DateTimeField()
    two_factor_enabled = models.BooleanField()
    otp_code = models.CharField(max_length=255)
    otp_expires_at = models.DateTimeField()
    recovery_codes = models.CharField(max_length=255)
    updated_at = models.DateTimeField()

    class Meta:
        db_table = '"user_d"."user_security"'
        managed = False  # Table is managed by Supabase

class UserAnalytics(models.Model):
    user_id = models.CharField(max_length=255, primary_key=True)
    posts_count = models.IntegerField()
    likes_received = models.IntegerField()
    followers_count = models.IntegerField()
    following_count = models.IntegerField()
    last_login = models.DateTimeField()
    activity_score = models.CharField(max_length=255)

    class Meta:
        db_table = '"user_d"."user_analytics"'
        managed = False  # Table is managed by Supabase

class PasswordResetTokens(models.Model):
    token = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    expires_at = models.DateTimeField()
    created_at = models.DateTimeField()
    used = models.BooleanField()

    class Meta:
        db_table = '"user_d"."password_reset_tokens"'
        managed = False  # Table is managed by Supabase

class UserCertificates(models.Model):
    user_id = models.CharField(max_length=255, primary_key=True)
    public_key = models.CharField(max_length=255)
    certificate = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"user_d"."user_certificates"'
        managed = False  # Table is managed by Supabase

class UserAuditLogs(models.Model):
    audit_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    action_type = models.CharField(max_length=255)
    details = models.CharField(max_length=255)
    performed_by = models.CharField(max_length=255)
    event_time = models.DateTimeField()

    class Meta:
        db_table = '"user_d"."user_audit_logs"'
        managed = False  # Table is managed by Supabase

class UserBlocklist(models.Model):
    block_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    reason = models.CharField(max_length=255)
    blocked_at = models.DateTimeField()

    class Meta:
        db_table = '"user_d"."user_blocklist"'
        managed = False  # Table is managed by Supabase

class UserSessions(models.Model):
    session_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    is_revoked = models.BooleanField()
    secret = models.CharField(max_length=255)

    class Meta:
        db_table = '"user_d"."user_sessions"'
        managed = False  # Table is managed by Supabase

# Post-related models
class PostsMetadata(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    summary = models.CharField(max_length=255)
    post_type = models.CharField(max_length=255)
    visibility = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Changed to DecimalField for monetary value
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."posts_metadata"'
        managed = False  # Table is managed by Supabase

class PostsAnalytics(models.Model):
    post_id = models.CharField(max_length=255, primary_key=True)
    views_count = models.IntegerField()
    likes_count = models.IntegerField()
    shares_count = models.IntegerField()
    comments_count = models.IntegerField()
    updated_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."posts_analytics"'
        managed = False  # Table is managed by Supabase

# Social interaction models
class Blocking(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    blocker_id = models.CharField(max_length=255)
    blocked_id = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."blocking"'
        managed = False  # Table is managed by Supabase

class ReportedContent(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    reporter_id = models.CharField(max_length=255)
    reported_user_id = models.CharField(max_length=255)
    post_id = models.CharField(max_length=255)
    reason = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."reported_content"'
        managed = False  # Table is managed by Supabase

class Notifications(models.Model):
    notification_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    notification_type = models.CharField(max_length=255)
    notification_content = models.CharField(max_length=255)
    is_read = models.BooleanField()
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."notifications"'
        managed = False  # Table is managed by Supabase

class Comments(models.Model):
    comment_id = models.CharField(max_length=255, primary_key=True)
    post_id = models.CharField(max_length=255)
    user_id = models.CharField(max_length=255)
    parent_comment_id = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."comments"'
        managed = False  # Table is managed by Supabase

class Likes(models.Model):
    serial_no = models.IntegerField(primary_key=True)
    user_id = models.CharField(max_length=255)
    post_id = models.CharField(max_length=255)
    liked_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."likes"'
        managed = False  # Table is managed by Supabase

class Following(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    follower_id = models.CharField(max_length=255)
    followee_id = models.CharField(max_length=255)
    followed_at = models.DateTimeField()

    class Meta:
        db_table = '"social"."following"'
        managed = False  # Table is managed by Supabase

# Monetization and content access models
class PayPerViewAccess(models.Model):
    access_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    access_expiry = models.DateTimeField()
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"items_d"."pay_per_view_access"'
        managed = False  # Table is managed by Supabase

class Items(models.Model):
    item_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    media_url = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Changed to DecimalField for monetary value
    monetization_type = models.CharField(max_length=255)
    availability = models.BooleanField()
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"items_d"."items"'
        managed = False  # Table is managed by Supabase

class Monetization(models.Model):
    monetization_id = models.CharField(max_length=255, primary_key=True)
    item_id = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Changed to DecimalField for monetary value
    currency = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"items_d"."monetization"'
        managed = False  # Table is managed by Supabase

class Favorites(models.Model):
    favorite_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"items_d"."favorites"'
        managed = False  # Table is managed by Supabase

class Reviews(models.Model):
    review_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    rating = models.IntegerField()
    review_text = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        db_table = '"items_d"."reviews"'
        managed = False  # Table is managed by Supabase

class Transactions(models.Model):
    transaction_id = models.CharField(max_length=255, primary_key=True)
    buyer_id = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # Changed to DecimalField for monetary value
    payment_status = models.CharField(max_length=255)
    transaction_date = models.DateTimeField()

    class Meta:
        db_table = '"items_d"."transactions"'
        managed = False  # Table is managed by Supabase

class AdminCred(models.Model):
    c_id = models.CharField(max_length=255, primary_key=True)
    created_at = models.DateTimeField()
    name= models.CharField(max_length=255)
    passowrd = models.CharField(max_length=255)  # Changed to DecimalField for monetary value
    hash = models.CharField(max_length=255)

    class Meta:
        db_table = '"audit"."admin_cred"'
        managed = False  # Table is managed by Supabase
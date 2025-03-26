from sqlalchemy import create_engine, MetaData, text
from sqlalchemy.sql import sqltypes

# Connection string without search_path
DATABASE_URL = "postgresql://prisma.qugdnavujrpjlflpxotj:connection_to_database@aws-0-eu-north-1.pooler.supabase.com:5432/postgres"

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Set the search_path for the session
with engine.connect() as connection:
    connection.execute(text("SET search_path TO social;"))

# Reflect the database schema for 'social'
metadata = MetaData()
metadata.reflect(bind=engine, schema="items_d")

# Map SQLAlchemy types to Django field types
def get_django_field_type(sqlalchemy_type):
    if isinstance(sqlalchemy_type, sqltypes.Integer):
        return "IntegerField"
    elif isinstance(sqlalchemy_type, sqltypes.String):
        return "CharField(max_length=255)"  # Adjust max_length as needed
    elif isinstance(sqlalchemy_type, sqltypes.DateTime):
        return "DateTimeField"
    elif isinstance(sqlalchemy_type, sqltypes.Boolean):
        return "BooleanField"
    else:
        return "CharField(max_length=255)"  # Fallback

# Generate Django model code
print("from django.db import models\n")
for table in metadata.tables.values():
    model_name = table.name.capitalize()  # Capitalize table name for model
    print(f"class {model_name}(models.Model):")
    
    for column in table.columns:
        field_type = get_django_field_type(column.type)
        if column.primary_key:
            print(f"    {column.name} = models.{field_type}(primary_key=True)")
        else:
            print(f"    {column.name} = models.{field_type}()")
    
    print("    class Meta:")
    print(f"        db_table = '\"social\".\"{table.name}\"'")
    print("        managed = False  # Table is managed by Supabase")
    print()
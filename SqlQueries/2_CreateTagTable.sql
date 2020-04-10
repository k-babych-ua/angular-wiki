CREATE TABLE dbo.TagTable
(
	Id bigint identity not null,
	Title nvarchar(256) null,
	
	CONSTRAINT PK_TagId primary key (Id)
)

ALTER TABLE dbo.TagTable
ADD CreatedOn datetime2;

ALTER TABLE dbo.TagTable
ADD ModifiedOn datetime2;

CREATE TRIGGER dbo.TagTable_CreatedModifiedDates
   ON  dbo.TagTable 
   AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @getDate DATETIME = GETDATE()

    -- Set the initial values of date_created and date_modified.
    UPDATE
        dbo.TagTable
    SET 
         CreatedOn = @getDate
    FROM
        dbo.TagTable Tag
        INNER JOIN INSERTED I ON Tag.Id = I.Id
        LEFT OUTER JOIN DELETED D ON I.Id = D.Id
    WHERE
        D.Id IS NULL

    -- Ensure the value of date_created does never changes.
    -- Update the value of date_modified to the current date.
    UPDATE
        dbo.TagTable
    SET
         CreatedOn = D.CreatedOn, 
		 ModifiedOn = @getDate
    FROM
        dbo.TagTable Tag
        INNER JOIN INSERTED I ON Tag.Id = I.Id
        INNER JOIN DELETED D ON I.Id = D.Id
END
CREATE TABLE dbo.ArticleTable
(
	Id bigint identity not null,
	Title nvarchar(256) null,
	FirstParagraph nvarchar(256) null,
	Body nvarchar(max) null,
	ImageUrl nvarchar(255) null,

	CONSTRAINT PK_ArticleId primary key (Id)
)

ALTER TABLE dbo.ArticleTable
ADD CreatedOn datetime2;

ALTER TABLE dbo.ArticleTable
ADD ModifiedOn datetime2;

CREATE TRIGGER dbo.ArticleTableTrigger_CreatedModifiedDates
   ON  dbo.ArticleTable 
   AFTER INSERT, UPDATE
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    -- Get the current date.
    DECLARE @getDate DATETIME = GETDATE()

    -- Set the initial values of date_created and date_modified.
    UPDATE
        dbo.ArticleTable
    SET 
         CreatedOn = @getDate
    FROM
        dbo.ArticleTable Article
        INNER JOIN INSERTED I ON Article.Id = I.Id
        LEFT OUTER JOIN DELETED D ON I.Id = D.Id
    WHERE
        D.Id IS NULL

    -- Ensure the value of date_created does never changes.
    -- Update the value of date_modified to the current date.
    UPDATE
        dbo.ArticleTable
    SET
         CreatedOn = D.CreatedOn, 
		 ModifiedOn = @getDate
    FROM
        dbo.ArticleTable Article
        INNER JOIN INSERTED I ON Article.Id = I.Id
        INNER JOIN DELETED D ON I.Id = D.Id
END
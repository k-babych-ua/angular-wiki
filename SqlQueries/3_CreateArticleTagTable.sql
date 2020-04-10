CREATE TABLE dbo.ArticleTagTable
(
	Id bigint identity not null,

	CONSTRAINT PK_ArticleTagId primary key (Id),

	ArticleId bigint not null,
	CONSTRAINT FK_ArticleTag_ArticleId foreign key (ArticleId) references dbo.ArticleTable(Id),

	TagId bigint not null,
	CONSTRAINT FK_ArticleTag_TagId foreign key (TagId) references dbo.TagTable(Id)
)

ALTER TABLE dbo.ArticleTagTable
ADD CreatedOn datetime2;

ALTER TABLE dbo.ArticleTagTable
ADD ModifiedOn datetime2;

CREATE TRIGGER dbo.ArticleTagTableTrigger_CreatedModifiedDates
   ON  dbo.ArticleTagTable 
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
        dbo.ArticleTagTable
    SET 
         CreatedOn = @getDate
    FROM
        dbo.ArticleTagTable Article
        INNER JOIN INSERTED I ON Article.Id = I.Id
        LEFT OUTER JOIN DELETED D ON I.Id = D.Id
    WHERE
        D.Id IS NULL

    -- Ensure the value of date_created does never changes.
    -- Update the value of date_modified to the current date.
    UPDATE
        dbo.ArticleTagTable
    SET
         CreatedOn = D.CreatedOn, 
		 ModifiedOn = @getDate
    FROM
        dbo.ArticleTagTable Article
        INNER JOIN INSERTED I ON Article.Id = I.Id
        INNER JOIN DELETED D ON I.Id = D.Id
END
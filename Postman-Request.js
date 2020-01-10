POST  Clients:    in postman select body and then raw option. 

localhost:3030/clients
{
	"mapId": 123,
    "mapName": "Red Baud"
}


POST  Records: 
// yolo Map id. 

{
	"MapId": "5e1445d5f6082f8375a04411",
	"RecordId": 123,
	"RecordName": "Header NEw",
	"FieldName": "fieldname - 3",
	"MappedFieldName": "MappedFieldname",
	"MaxCharLength": "23",
	"SequenceNumber": 2,
	"alignment": "left",
	"PaddingLeft": "L",
	"PaddingLeftLength": "2",
	"PaddingRight": "R",
	"PaddingRightLength": "23"
}

POST  Fieldslist: 

{
	"MapId": "5e16d38a57bb05fd72ec570e",
	"RecordId" : "",
	"clientId": 123,
	"RecordName": "Header NEw",
	"FieldName": "Jan10 - fieldName",
	"MappingFieldOptions": ["TYPE_CODE", "ACCOUNT_NUMBER", "POST_DATE", "ENCUMBRANCE", "JOURNAL", "AMOUNT", "D_UI_PROJECT_ID", "D_AMOUNT", "D_PERCENT"],
	"MappedFieldPicked": "TYPE_CODE",
	"MaxCharLength": "23",
	"SequenceNumber": 2,
	"alignment": "left",
	"PaddingLeft": "L",
	"PaddingLeftLength": "2",
	"PaddingRight": "R",
	"PaddingRightLength": "23"
}


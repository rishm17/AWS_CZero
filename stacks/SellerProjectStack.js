import * as sst from "@serverless-stack/resources";

export default class SellerProjectStack extends sst.Stack {
  // Public reference to the table
  bucket;
  table;

  constructor(scope, id, props) {
    super(scope, id, props);

    
    this.bucket = new sst.Bucket(this, "Uploads");
    this.table = new sst.Table(this, "Seller_Projects", {
      fields: {
        userId: sst.TableFieldType.STRING,
        projectId: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "userId", sortKey: "projectId" },
    });
  }
}
import { Request, Response } from "express";
import { ResponseModel, InvoiceModel } from "../Model/index";
import { InvoiceInterface } from "../Interface/invoiceInterface";

class InvoiceController {
  Get(req: Request, res: Response) {
    let response = new ResponseModel();
    try {
      response.status = 200;
      response.message = "invoice get successfully";
      response.data = "{}";
    } catch (error: any) {
      response.status = 400;
      response.message = error.message;
    }
    res.send(response);
  }

  Save(req: Request, res: Response) {
    let response = new ResponseModel();

    var Invoice = {
      invoices: [
        { id: 1, No: 1234, Customer: "Meet" },
        { id: 2, No: 1235, Customer: "Dev" },
      ],
    };
    var objInvoice = new InvoiceModel();
    objInvoice.id = Invoice.invoices[0].id;
    objInvoice.No = Invoice.invoices[0].No;
    objInvoice.Customer = Invoice.invoices[0].Customer;
    console.log("objInvoice", objInvoice);

    let invoiceInter: InvoiceInterface = Invoice;

    var InvoiceStr = JSON.stringify(Invoice);
    console.log(InvoiceStr);

    try {
      response.status = 200;
      response.message = "invoice Save successfully";
      response.data = invoiceInter;
    } catch (error: any) {
      response.status = 400;
      response.message = error.message;
    }
    res.send(response);
    console.log("save Invoice");
  }
}
export default new InvoiceController();

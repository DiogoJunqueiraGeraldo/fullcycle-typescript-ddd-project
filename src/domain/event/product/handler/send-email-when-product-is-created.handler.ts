import { Product } from "../../../entity/product";
import EventHandlerInterface from "../../@shared/event-handler.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<Product> {
  handle(event: ProductCreatedEvent): void {
    console.log('Sending email...')
  }
}
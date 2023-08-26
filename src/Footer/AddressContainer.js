import Item from "./Address";
import { Address1, Address2 } from "./Items";
const AddressContainer = () => {
  return (
<div className="grid grid-cols-2 md:grid-cols-2 lg:col-span-2 gap-2 ">
<Item Links={Address1} title="ADDRESS 1" classname="text-start"/>
<Item Links={Address2} title="ADDRESS 2" />
</div>
  );
};

export default AddressContainer;

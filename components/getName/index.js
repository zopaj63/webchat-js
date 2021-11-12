// get member name
export default function getName() {
    let member_name = "Member X";
    const memberNameForm = document.querySelector(".js-member-name");
    console.log(memberNameForm);
    const memberNameInput = memberNameForm.querySelector(".js-member-name__input");
    console.log(memberNameInput);
    memberNameForm.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("memberNameInput.value");
        member_name = memberNameInput.value;
        console.log(member_name);
    });
    return member_name;
}

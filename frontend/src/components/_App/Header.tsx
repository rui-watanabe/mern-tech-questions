import { NextComponentType } from "next";
import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";

export const Header: NextComponentType = () => {
  return (
    <Menu fluid={true} id="menu" inverted>
      <Container>
        <Link href="/">
          <Menu.Item header>
            <Image
              size="mini"
              src="/public/logo.svg"
              style={{ marginRight: "1rem" }}
            />
            Home
          </Menu.Item>
        </Link>

        <Link href="/favorite">
          <Menu.Item header>
            <Icon name="favorite" size="large" />
            Favorite
          </Menu.Item>
        </Link>

        <Link href="/create">
          <Menu.Item header>
            <Icon name="add square" size="large" />
            Create
          </Menu.Item>
        </Link>

        <Link href="/account">
          <Menu.Item header>
            <Icon name="user" size="large" />
            Account
          </Menu.Item>
        </Link>

        <Menu.Item header>
          <Icon name="sign out" size="large" />
          Logout
        </Menu.Item>

        <Link href="/login">
          <Menu.Item header>
            <Icon name="sign in" size="large" />
            Login
          </Menu.Item>
        </Link>

        <Link href="/signup">
          <Menu.Item header>
            <Icon name="signup" size="large" />
            Signup
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

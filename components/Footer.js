<Footer>
  {!!state.accessToken && (
    <FooterTab>
      <Button vertical>
        <Icon name="apps" />
        <Text>Institution List</Text>
      </Button>
      <Button vertical>
        <Icon name="person" />
        <Text>Log out</Text>
      </Button>
    </FooterTab>
  )}
</Footer>;
